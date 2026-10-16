'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, MapPin } from 'lucide-react';
import { addressSchema } from '@/lib/validators';
import './AddressForm.css';

export default function AddressForm({ defaultValues, onSubmitAddress }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: defaultValues || {
      fullName: 'Aarav Singhania',
      phone: '9839044210',
      email: 'aarav.singhania@royalpatron.in',
      pincode: '208001',
      addressLine1: 'Bungalow 14, Tilak Nagar, Civil Lines',
      landmark: 'Near Kanpur Club',
      city: 'Kanpur',
      state: 'Uttar Pradesh',
      addressType: 'Home',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmitAddress)} className="address-form">
      <div className="address-form__head">
        <MapPin size={20} />
        <div>
          <h3>White-Glove Delivery Residence</h3>
          <p>Our 2-person crew will coordinate elevator/staircase access prior to dispatch.</p>
        </div>
      </div>

      <div className="address-form__grid">
        <div className="address-form__field">
          <label>Patron Full Name *</label>
          <input type="text" {...register('fullName')} />
          {errors.fullName && (
            <span className="address-form__err">{errors.fullName.message}</span>
          )}
        </div>

        <div className="address-form__field">
          <label>10-Digit Mobile Number *</label>
          <input type="tel" maxLength={10} {...register('phone')} />
          {errors.phone && (
            <span className="address-form__err">{errors.phone.message}</span>
          )}
        </div>

        <div className="address-form__field">
          <label>Patron Email (For Warranty Certificate) *</label>
          <input type="email" {...register('email')} />
          {errors.email && (
            <span className="address-form__err">{errors.email.message}</span>
          )}
        </div>

        <div className="address-form__field">
          <label>6-Digit Pincode *</label>
          <input type="text" maxLength={6} {...register('pincode')} />
          {errors.pincode && (
            <span className="address-form__err">{errors.pincode.message}</span>
          )}
        </div>

        <div className="address-form__field address-form__field--full">
          <label>Bungalow / Apartment / Street Address *</label>
          <input type="text" {...register('addressLine1')} />
          {errors.addressLine1 && (
            <span className="address-form__err">
              {errors.addressLine1.message}
            </span>
          )}
        </div>

        <div className="address-form__field">
          <label>Landmark (Optional)</label>
          <input type="text" {...register('landmark')} />
        </div>

        <div className="address-form__field">
          <label>Residence Type</label>
          <select {...register('addressType')}>
            <option value="Home">Private Residence / Villa</option>
            <option value="Office">Executive Office / Studio</option>
            <option value="Studio">Architect Project Site</option>
          </select>
        </div>

        <div className="address-form__field">
          <label>City *</label>
          <input type="text" {...register('city')} />
          {errors.city && (
            <span className="address-form__err">{errors.city.message}</span>
          )}
        </div>

        <div className="address-form__field">
          <label>State *</label>
          <input type="text" {...register('state')} />
          {errors.state && (
            <span className="address-form__err">{errors.state.message}</span>
          )}
        </div>
      </div>

      <button type="submit" className="btn-wood-polish address-form__submit">
        <span>Continue to Royal Vault Payment</span>
        <ArrowRight size={17} />
      </button>
    </form>
  );
}
