import { resend } from '@/lib/resend'
import verificationEmail from '@/../emails/newInquire'

export async function inquryEmail(email: string, username: string, phone: string, message: string, services: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: '"Camdeo <noreply@camdeo.in>',
      to: process.env.EMAIL!,
      subject: 'New Inquiry || Camdeo',
      react: verificationEmail({ username, phone, email, message, services }),
    })

    return {
      success: true,
      message: 'Email sent successfully',
    }
  } catch (emailError) {
    console.log('Error sending Email', emailError)
    return {
      success: false,
      message: 'Error Sending Email',
    }
  }
}