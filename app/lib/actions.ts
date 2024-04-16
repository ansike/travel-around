export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createEnroll(prevState: State, formData: FormData) {
    // 
}
