'use client'
 
import { signup } from "@/lib/actions/auth";
import { useFormState, useFormStatus } from "react-dom";

export function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit">
      {pending ? "Submitting..." : "Sign up"}
    </button>
  );
}

export function SignupForm() {
  const [state, action] = useFormState(signup, undefined);
  return (
    <form action={action}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}
      <div>
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" placeholder="Phone" />
      </div>
      {state?.errors?.phone && <p>{state.errors.phone}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      {state?.message}
      <br />
      <SignupButton />
    </form>
  );
}
