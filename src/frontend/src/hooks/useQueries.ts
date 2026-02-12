import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface SubmitMessageParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useSubmitMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email, subject, message }: SubmitMessageParams) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }
      await actor.submitMessage(name, email, subject, message);
    },
    onSuccess: () => {
      // Invalidate any message-related queries if needed in the future
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
  });
}
