import { z } from 'zod';

export const addressSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Enter a valid email address'),
  pincode: z.string().regex(/^\d{6}$/, 'Enter a valid 6-digit pincode'),
  addressLine1: z.string().min(8, 'House/Flat & Street address is required'),
  landmark: z.string().optional(),
  city: z.string().min(2, 'City name is required'),
  state: z.string().min(2, 'State is required'),
  addressType: z.enum(['Home', 'Office', 'Studio']).default('Home'),
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  subject: z.string().min(3, 'Please select or enter an inquiry topic'),
  roomType: z.string().min(2, 'Please select a space or category'),
  message: z.string().min(15, 'Tell us a little more (at least 15 characters)'),
});
