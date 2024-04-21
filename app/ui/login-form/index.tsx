'use client'
 
import { login,  } from "@/lib/actions/auth";
import { useFormState, useFormStatus } from "react-dom";

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit">
      {pending ? "Submitting..." : "Login"}
    </button>
  );
}

export function LoginForm() {
  const [state, action] = useFormState(login, undefined);
  return (
    <form action={action}>
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
      <LoginButton />
    </form>
  );
}
