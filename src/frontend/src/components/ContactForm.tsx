import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { isValidEmail } from '../lib/isValidEmail';
import { useSubmitMessage } from '../hooks/useQueries';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitMessageMutation = useSubmitMessage();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        await submitMessageMutation.mutateAsync({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: 'Contact Form Submission',
          message: formData.message.trim(),
        });
        
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        
        // Reset success state after 8 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 8000);
      } catch (error) {
        // Error is handled by mutation state
        console.error('Failed to submit message:', error);
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
      <div className="flex flex-col items-center justify-center p-12 text-center space-y-5 bg-card rounded-xl border border-border shadow-xs">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground">Message Received!</h3>
        <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
          {siteContent.contact.form.successMessage}
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="mt-4 shadow-xs hover:shadow-soft transition-all"
          size="lg"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl border border-border shadow-xs">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-foreground">Send us a Message</h3>
      </div>
      
      {submitMessageMutation.isError && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
          <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="flex-1 text-sm text-destructive">
            Failed to send message. Please try again or email us directly at{' '}
            {emailIsValid ? (
              <a href={`mailto:${siteContent.contact.info.email}`} className="underline font-medium">
                {siteContent.contact.info.email}
              </a>
            ) : (
              <span className="font-medium">{siteContent.contact.info.email}</span>
            )}
          </div>
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`h-11 ${errors.name ? 'border-destructive' : ''}`}
          placeholder="Your name"
          disabled={submitMessageMutation.isPending}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`h-11 ${errors.email ? 'border-destructive' : ''}`}
          placeholder="your.email@example.com"
          disabled={submitMessageMutation.isPending}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`min-h-[120px] resize-none ${errors.message ? 'border-destructive' : ''}`}
          placeholder="Tell us about your project..."
          disabled={submitMessageMutation.isPending}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        size="lg"
        className="w-full group h-11 shadow-soft hover:shadow-medium transition-all"
        disabled={submitMessageMutation.isPending}
      >
        {submitMessageMutation.isPending ? (
          <>
            Sending...
            <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>
    </form>
  );
}
