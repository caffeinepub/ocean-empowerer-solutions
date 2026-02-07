import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { CheckCircle2, Send } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { isValidEmail } from '../lib/isValidEmail';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 5000);
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
      <div className="flex flex-col items-center justify-center p-12 md:p-16 text-center space-y-6 bg-card rounded-2xl border shadow-soft">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-3xl font-semibold font-display">Message Sent!</h3>
        <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
          {siteContent.contact.form.successMessage}
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="mt-4 border-2"
          size="lg"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-card p-8 md:p-10 rounded-2xl border shadow-soft">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold font-display mb-6">Send us a Message</h3>
      </div>
      
      <div className="space-y-3">
        <Label htmlFor="name" className="text-base font-medium">Name *</Label>
        <Input
          id="name"
          type="text"
          placeholder={siteContent.contact.form.namePlaceholder}
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`h-12 text-base ${errors.name ? 'border-destructive' : ''}`}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-3">
        <Label htmlFor="email" className="text-base font-medium">Email *</Label>
        <Input
          id="email"
          type="email"
          placeholder={siteContent.contact.form.emailPlaceholder}
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`h-12 text-base ${errors.email ? 'border-destructive' : ''}`}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      <div className="space-y-3">
        <Label htmlFor="message" className="text-base font-medium">Message *</Label>
        <Textarea
          id="message"
          placeholder={siteContent.contact.form.messagePlaceholder}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`min-h-[150px] text-base resize-none ${errors.message ? 'border-destructive' : ''}`}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full text-base py-6 shadow-soft hover:shadow-medium group"
      >
        <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        {siteContent.contact.form.submitButton}
      </Button>
    </form>
  );
}
