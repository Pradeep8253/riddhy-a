'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { contactSchema } from '@/lib/validators';
import './ContactFormBlock.css';

export default function ContactFormBlock() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: 'Bespoke Furniture / Full Home Consultation',
      roomType: 'Living Room & Dining',
      message: '',
    },
  });

  const onSubmit = (data) => {
    toast.success(
      `Thank you, ${data.name}! Senior Architect Riddhi Swarup’s desk will contact you within 2 hours.`
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form-block">
      <h3>Request Private Consultation or Swatch Kit</h3>
      <p>
        Receive complimentary Burmese teak stain blocks &amp; Italian velvet
        swatches delivered to your residence.
      </p>

      <div className="contact-form-block__grid">
        <div className="contact-form-block__field">
          <label>Your Full Name *</label>
          <input type="text" placeholder="e.g. Vikramaditya Singh" {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className="contact-form-block__field">
          <label>10-Digit Mobile *</label>
          <input type="tel" maxLength={10} placeholder="9839044210" {...register('phone')} />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>

        <div className="contact-form-block__field">
          <label>Email Address *</label>
          <input type="email" placeholder="patron@domain.in" {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="contact-form-block__field">
          <label>Sanctuary / Space *</label>
          <select {...register('roomType')}>
            <option value="Living Room & Dining">Living Room &amp; Banquet Dining</option>
            <option value="Master Bedroom Suite">Master Bedroom &amp; Wardrobes</option>
            <option value="Bespoke Smart Appliances">Bespoke Smart Appliances</option>
            <option value="Full Villa / Trousseau">Complete Villa / Bridal Trousseau</option>
          </select>
        </div>

        <div className="contact-form-block__field contact-form-block__field--full">
          <label>Inquiry Topic *</label>
          <input type="text" {...register('subject')} />
          {errors.subject && <span>{errors.subject.message}</span>}
        </div>

        <div className="contact-form-block__field contact-form-block__field--full">
          <label>Project Dimensions, Timber Preferences or Questions *</label>
          <textarea
            rows={4}
            placeholder="Tell us about your room dimensions, preferred wood finish, or delivery city..."
            {...register('message')}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>
      </div>

      <button type="submit" className="btn-wood-polish">
        <Send size={16} />
        <span>Dispatch Inquiry to Senior Architect</span>
      </button>
    </form>
  );
}
