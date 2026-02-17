import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { ServiceType } from '../backend';

interface SubmitInquiryParams {
  name: string;
  email: string;
  phone: string;
  service: ServiceType;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email, phone, service, message }: SubmitInquiryParams) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }
      await actor.submitInquiry(name, email, phone, service, message);
    },
    onSuccess: () => {
      // Invalidate any inquiry-related queries if needed in the future
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
  });
}
