import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { isValidEmail } from '../lib/isValidEmail';
import { useSubmitInquiry } from '../hooks/useQueries';
import { ServiceType } from '../backend';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '' as ServiceType | '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitInquiryMutation = useSubmitInquiry();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide at least 20 characters describing your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        await submitInquiryMutation.mutateAsync({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service as ServiceType,
          message: formData.message.trim(),
        });
        
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setErrors({});
        
        // Reset success state after 10 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 10000);
      } catch (error) {
        // Error is handled by mutation state
        console.error('Failed to submit inquiry:', error);
      }
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const emailIsValid = isValidEmail(siteContent.contact.info.email);

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center space-y-6 bg-card rounded-lg border border-border shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Inquiry Received!</h3>
        <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
          {siteContent.contact.form.successMessage}
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="mt-4 shadow-xs hover:shadow-sm transition-all font-semibold"
          size="lg"
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border shadow-sm">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-foreground">Request a Free Estimate</h3>
        <p className="text-sm text-muted-foreground">{siteContent.contact.form.note}</p>
      </div>
      
      {submitInquiryMutation.isError && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
          <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="flex-1 text-sm text-destructive">
            Failed to submit inquiry. Please try again or contact us directly at{' '}
            {emailIsValid ? (
              <a href={`mailto:${siteContent.contact.info.email}`} className="underline font-semibold">
                {siteContent.contact.info.email}
              </a>
            ) : (
              <span className="font-semibold">{siteContent.contact.info.email}</span>
            )}
          </div>
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-semibold text-foreground">
          Name *
        </Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`h-11 ${errors.name ? 'border-destructive' : ''}`}
          placeholder={siteContent.contact.form.namePlaceholder}
          disabled={submitInquiryMutation.isPending}
        />
        {errors.name && (
          <p className="text-xs text-destructive font-semibold">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-semibold text-foreground">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`h-11 ${errors.email ? 'border-destructive' : ''}`}
          placeholder={siteContent.contact.form.emailPlaceholder}
          disabled={submitInquiryMutation.isPending}
        />
        {errors.email && (
          <p className="text-xs text-destructive font-semibold">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
          Phone *
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={`h-11 ${errors.phone ? 'border-destructive' : ''}`}
          placeholder={siteContent.contact.form.phonePlaceholder}
          disabled={submitInquiryMutation.isPending}
        />
        {errors.phone && (
          <p className="text-xs text-destructive font-semibold">{errors.phone}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="service" className="text-sm font-semibold text-foreground">
          Service Type *
        </Label>
        <Select
          value={formData.service}
          onValueChange={(value) => handleChange('service', value)}
          disabled={submitInquiryMutation.isPending}
        >
          <SelectTrigger className={`h-11 ${errors.service ? 'border-destructive' : ''}`}>
            <SelectValue placeholder={siteContent.contact.form.servicePlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {siteContent.contact.form.serviceTypes.map((serviceType) => (
              <SelectItem key={serviceType.value} value={serviceType.value}>
                {serviceType.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-xs text-destructive font-semibold">{errors.service}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-semibold text-foreground">
          Project Details *
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`min-h-[140px] resize-none ${errors.message ? 'border-destructive' : ''}`}
          placeholder={siteContent.contact.form.messagePlaceholder}
          disabled={submitInquiryMutation.isPending}
        />
        {errors.message && (
          <p className="text-xs text-destructive font-semibold">{errors.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        size="lg"
        className="w-full group h-11 shadow-sm hover:shadow-md transition-all font-semibold"
        disabled={submitInquiryMutation.isPending}
      >
        {submitInquiryMutation.isPending ? (
          <>
            Submitting...
            <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </>
        ) : (
          <>
            {siteContent.contact.form.submitButton}
            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>
    </form>
  );
}
