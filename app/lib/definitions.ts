import { z } from 'zod'
 
export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: '用户名至少2个字符' })
    .trim(),
  phone: z
    .string()
    .min(11, { message: '电话号码必须是11位数字' })
    .trim(),
  password: z
    .string()
    .min(8, { message: '密码长度至少为8' })
    .regex(/[a-zA-Z]/, { message: '至少包含一个字母' })
    .regex(/[0-9]/, { message: '至少包含一个数字' })
    .regex(/[^a-zA-Z0-9]/, {
      message: '至少包含一个特殊字符',
    })
    .trim(),
})
export const LoginFormSchema = z.object({
  phone: z
    .string()
    .min(11, { message: '电话号码必须是11位数字' })
    .trim(),
  password: z
    .string()
    .min(8, { message: '密码长度至少为8' })
    .regex(/[a-zA-Z]/, { message: '至少包含一个字母' })
    .regex(/[0-9]/, { message: '至少包含一个数字' })
    .regex(/[^a-zA-Z0-9]/, {
      message: '至少包含一个特殊字符',
    })
    .trim(),
})
 
export type FormState =
  | {
      errors?: {
        name?: string[]
        phone?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export type SessionPayload = {
    userId: number
    expiresAt: Date
}