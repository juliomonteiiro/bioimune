import { useState } from 'react';

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
  phone?: boolean;
}

interface ValidationErrors {
  [key: string]: string;
}

const useFormValidation = (initialState: { [key: string]: string }) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setTouched({});
  };

  const validateField = (name: string, value: string, rules: ValidationRules) => {
    if (rules.required && !value) {
      return 'Este campo é obrigatório';
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Mínimo de ${rules.minLength} caracteres`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Máximo de ${rules.maxLength} caracteres`;
    }

    if (rules.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Email inválido';
    }

    if (rules.phone && !/^\(\d{2}\)\s\d{5}-\d{4}$/.test(value)) {
      return 'Telefone inválido (00) 00000-0000';
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Formato inválido';
    }

    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    let formattedValue = value;
    
    if (name === 'phone') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .slice(0, 15);
    }

    setValues(prev => ({ ...prev, [name]: formattedValue }));
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleBlur = (name: string, rules: ValidationRules) => {
    const error = validateField(name, values[name], rules);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = (validationRules: { [key: string]: ValidationRules }) => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    Object.keys(values).forEach(key => {
      const error = validateField(key, values[key], validationRules[key] || {});
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    setValues,
    setErrors,
    resetForm,
  };
};

export default useFormValidation;
