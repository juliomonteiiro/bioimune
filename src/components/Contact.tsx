import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import Section from './ui/Section';
import SectionTitle from './shared/SectionTitle';
import Grid from './layout/Grid';
import Input from './ui/Input';
import TextArea from './ui/TextArea';
import Select from './ui/Select';
import Button from './ui/Button';
import Card from './ui/Card';
import useFormValidation from '../hooks/useFormValidation';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    setValues
  } = useFormValidation({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });


  const validationRules = {
    name: { required: true, minLength: 3 },
    phone: { required: true, phone: true },
    email: { required: true, email: true },
    service: { required: true },
    message: { required: true, minLength: 10 }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm(validationRules)) {
      toast.error('Por favor, corrija os erros no formulário');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_w2dl0o4',
        'template_bfihnwm',
        {
          from_name: values.name,
          phone: values.phone,
          email: values.email,
          service: values.service,
          message: values.message
        },
        '3IB_ceG5wI3f_RTfu'
      );    
      console.log(values.email);  

      toast.success('Mensagem enviada com sucesso! Em breve entraremos em contato.');
      setValues({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro no envio do EmailJS:', error);
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { value: 'Dedetização Residencial', label: 'Dedetização Residencial' },
    { value: 'Dedetização Comercial', label: 'Dedetização Comercial' },
    { value: 'Sanitização', label: 'Sanitização' }
  ];

  return (
    <Section id="contato" bgColor="bg-gray-50">
      <Toaster position="top-right" />
      <Grid cols={2} gap={12}>
        <div>
          <SectionTitle
            title="Solicite um Orçamento Gratuito"
            centered={false}
          />
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            Proteja seu ambiente com a Bio Imune! Nossa equipe especializada está pronta para oferecer 
            a melhor solução para suas necessidades. Faça um orçamento sem compromisso e garanta um 
            ambiente livre de pragas com até 3 meses de garantia.
          </p>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Profissional Bio Imune"
            className="w-full h-full object-cover"
          />
          </div>
        </div>
        
        <Card className="p-8" hover={false}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Nome"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name', validationRules.name)}
              error={touched.name ? errors.name : ''}
              placeholder="Digite seu nome completo"
            />
            
            <Input
              label="Telefone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              onBlur={() => handleBlur('phone', validationRules.phone)}
              error={touched.phone ? errors.phone : ''}
              placeholder="(00) 00000-0000"
            />
            
            <Input
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email', validationRules.email)}
              error={touched.email ? errors.email : ''}
              placeholder="seu@email.com"
            />

            <Select
              label="Tipo de Serviço"
              name="service"
              value={values.service}
              onChange={handleChange}
              onBlur={() => handleBlur('service', validationRules.service)}
              error={touched.service ? errors.service : ''}
              options={serviceOptions}
            />
            
            <TextArea
              label="Mensagem"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={() => handleBlur('message', validationRules.message)}
              error={touched.message ? errors.message : ''}
              rows={4}
              placeholder="Descreva sua necessidade ou dúvida..."
            />
            
            <Button
              type="submit"
              disabled={isSubmitting}
              fullWidth
              className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento Gratuito'}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Responderemos seu contato em até 24 horas úteis
            </p>
          </form>
        </Card>
      </Grid>
    </Section>
  );
}

export default Contact;