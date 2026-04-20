import { defineType, defineField, defineArrayMember } from "sanity";

export const LOCALES = [
  { id: "en", title: "English" },
  { id: "ar", title: "Arabic" },
];

const DEFAULT_TRANSLATIONS: Record<string, { en: string; ar: string }> = {
  full_name: {
    en: "Full Name",
    ar: "إسم المستخدم",
  },
  phone_number: {
    en: "Phone Number",
    ar: "رقم الجوال",
  },
  your_message: {
    en: "Your Message",
    ar: "أدخل رسالتك",
  },
  select_service: {
    en: "Select service",
    ar: "اختر الخدمة",
  },
  make_appointment: {
    en: "Make Appointment",
    ar: "إحجز موعد",
  },
  select_date: {
    en: "Select Date",
    ar: "إختر التاريخ",
  },
  whatsapp_note: {
    en: "Please provide a phone number with WhatsApp",
    ar: "يرجى تزويدنا برقم هاتف يحتوي على واتساب",
  },
  email: {
    en: "Email",
    ar: "البريد الالكتروني",
  },
  optional: {
    en: "Optional",
    ar: "إختياري",
  },
  chat_on_whatsApp: {
    en: "Chat on Whatsapp",
    ar: "تحدث من خلال Whatsapp",
  },
  read_more: {
    en: "Read More",
    ar: "إقرا أكثر",
  },
  appointment_success: {
    en: "Appointment request sent successfully",
    ar: "تم إرسال طلب الموعد بنجاح",
  },
  copied_to_clipboard: {
    en: "Copied!",
    ar: "تم النسخ",
  },
  back_to_articles: {
    en: "Back to articles",
    ar: "العودة إلى المقالات",
  },
  min_read: {
    en: "min read",
    ar: "دقيقة للقراءة",
  },
  topics_covered: {
    en: "Topics covered",
    ar: "المواضيع المشمولة",
  },
  continue_reading: {
    en: "Continue reading",
    ar: "متابعة القراءة",
  },
  appointment_error: {
    en: "Failed to submit appointment. Please try again!",
    ar: "فشل في إرسال طلب الموعد. يرجى المحاولة مرة أخرى",
  },
  submitting: {
    en: "Submitting…",
    ar: "جارٍ الإرسال…",
  },
  select_field_error: {
    en: "Please select a service",
    ar: "الرجاء اختيار خدمة",
  },
  date_field_error: {
    en: "Please select a date",
    ar: "الرجاء اختيار تاريخ",
  },

  name_field_minLength_error: {
    en: "Name must be at least 2 characters",
    ar: "يجب أن يتكون الاسم من حرفين على الأقل",
  },
  name_field_maxLength_error: {
    en: "Name must be less than 100 characters",
    ar: "يجب أن يكون الاسم أقل من 100 حرف",
  },
  name_field_invalid_characters_error: {
    en: "Name contains invalid characters",
    ar: "الاسم يحتوي على أحرف غير صالحة",
  },

  email_field_invalid_error: {
    en: "Invalid email address",
    ar: "عنوان البريد الإلكتروني غير صالح",
  },

  phone_field_minLength_error: {
    en: "Phone number must be at least 10 digits",
    ar: "يجب أن يتكون رقم الهاتف من 10 أرقام على الأقل",
  },
  phone_field_invalid_format_error: {
    en: "Invalid phone number format",
    ar: "صيغة رقم الهاتف غير صالحة",
  },

  message_field_minLength_error: {
    en: "Message must be at least 10 characters",
    ar: "يجب أن تتكون الرسالة من 10 أحرف على الأقل",
  },
  message_field_maxLength_error: {
    en: "Message must be less than 1000 characters",
    ar: "يجب أن تكون الرسالة أقل من 1000 حرف",
  },

  appointment_submit_failed_error: {
    en: "Failed to submit appointment",
    ar: "فشل في إرسال الموعد",
  },

  view_details: {
    en: "View Details",
    ar: "عرض التفاصيل",
  },
  appointment_details: {
    en: "Appointment Details",
    ar: "تفاصيل الموعد",
  },
  created_on: {
    en: "Created on",
    ar: "تاريخ الإنشاء",
  },
  edit: {
    en: "Edit",
    ar: "تعديل",
  },

  pending: {
    en: "Pending",
    ar: "قيد الانتظار",
  },
  confirmed: {
    en: "Confirmed",
    ar: "تم التأكيد",
  },
  completed: {
    en: "Completed",
    ar: "مكتمل",
  },
  cancelled: {
    en: "Cancelled",
    ar: "ملغي",
  },

  client_information: {
    en: "Client information",
    ar: "معلومات العميل",
  },
  service: {
    en: "Service",
    ar: "الخدمة",
  },
  preferred_date: {
    en: "Preferred date",
    ar: "التاريخ المختار",
  },
  time_spent: {
    en: "Time Spent",
    ar: "الوقت الذي تم قضاؤه",
  },
  expected_payment: {
    en: "Expected Payment",
    ar: "المبلغ المتوقع",
  },
  client_message: {
    en: "Client Message",
    ar: "ملاحظة العميل",
  },
  internal_notes: {
    en: "Internal notes",
    ar: "ملاحظات خاصة",
  },
  status: {
    en: "Status",
    ar: "حالة الطلب",
  },

  saving: {
    en: "Saving",
    ar: "جارٍ الحفظ",
  },
  save_changes: {
    en: "Save Changes",
    ar: "تم حفظ التغيرات",
  },
  cancel: {
    en: "Cancel",
    ar: "إلغاء",
  },

  appointments: {
    en: "Appointments",
    ar: "المواعيد",
  },
  manage_customer_bookings: {
    en: "Manage your customer bookings",
    ar: "إدارة حجوزات العملاء",
  },
  search_appointments: {
    en: "Search appointments…",
    ar: "البحث عن المواعيد…",
  },
  filter_by_status: {
    en: "Filter by status",
    ar: "فلترة حسب الحالة",
  },
  all: {
    en: "All",
    ar: "الكل",
  },
  whatsapp: {
    en: "Whatsapp",
    ar: "Whatsapp",
  },
  hrs: {
    en: "hr / hrs",
    ar: "ساعة / ساعات",
  },
  no_appointments_found: {
    en: "No appointments found",
    ar: "لا توجد مواعيد متاحة",
  },
  try_adjusting_filters: {
    en: "Try adjusting your filters or search query",
    ar: "حاول تعديل الفلاتر أو عبارة البحث",
  },
  appointment_updated_successfully: {
    en: "Appointment updated successfully",
    ar: "تم تحديث الموعد بنجاح",
  },
  failed_to_update_appointment: {
    en: "Failed to update appointment",
    ar: "فشل في تحديث الموعد. يرجى المحاولة مرة أخرى.",
  },
  logout: {
    en: "Logout",
    ar: "تسجيل الخروج",
  },
  // Sign In
  sign_in_welcome: {
    en: "Welcome Back",
    ar: "مرحباً بعودتك",
  },
  sign_in_subtitle: {
    en: "Sign in to your account",
    ar: "سجّل الدخول إلى حسابك",
  },
  password: {
    en: "Password",
    ar: "كلمة المرور",
  },
  forgot_password: {
    en: "Forgot your password?",
    ar: "نسيت كلمة المرور؟",
  },
  signing_in: {
    en: "Signing in...",
    ar: "جاري تسجيل الدخول...",
  },
  sign_in: {
    en: "Sign In",
    ar: "تسجيل الدخول",
  },
  sign_in_error: {
    en: "An error occurred. Please try again.",
    ar: "حدث خطأ. يرجى المحاولة مرة أخرى.",
  },
  forgot_password_title: {
    en: "Forgot Password",
    ar: "نسيت كلمة المرور",
  },
  forgot_password_subtitle: {
    en: "We'll send you a reset link",
    ar: "سنرسل لك رابط إعادة تعيين",
  },
  forgot_password_success: {
    en: "Check your email for a reset link.",
    ar: "تحقق من بريدك الإلكتروني للحصول على رابط إعادة التعيين.",
  },
  sending: {
    en: "Sending...",
    ar: "جاري الإرسال...",
  },
  send_reset_link: {
    en: "Send Reset Link",
    ar: "إرسال رابط إعادة التعيين",
  },
  back_to_sign_in: {
    en: "Back to Sign In",
    ar: "العودة إلى تسجيل الدخول",
  },
  something_went_wrong: {
    en: "Something went wrong.",
    ar: "حدث خطأ ما.",
  },
  reset_password_title: {
    en: "Reset Password",
    ar: "إعادة تعيين كلمة المرور",
  },
  new_password: {
    en: "New Password",
    ar: "كلمة المرور الجديدة",
  },
  reset_password_success: {
    en: "Password reset! Redirecting to Sign In...",
    ar: "تم إعادة تعيين كلمة المرور! جارٍ تحويلك إلى تسجيل الدخول...",
  },
  resetting: {
    en: "Resetting...",
    ar: "جاري إعادة التعيين...",
  },
  reset_password: {
    en: "Reset Password",
    ar: "إعادة تعيين كلمة المرور",
  },
};

// Build initialValue entries array from the defaults
const initialEntries = Object.entries(DEFAULT_TRANSLATIONS).map(
  ([keyword, value]) => ({
    _type: "entry",
    _key: keyword,
    keyword,
    en: value.en,
    ar: value.ar,
  }),
);

export default defineType({
  name: "dictionaries",
  title: "Dictionaries",
  type: "document",
  initialValue: {
    entries: initialEntries,
  },
  fields: [
    defineField({
      name: "entries",
      title: "Entries",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "entry",
          fields: [
            defineField({
              name: "keyword",
              title: "Keyword",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            ...LOCALES.map((loc) =>
              defineField({
                name: loc.id,
                title: loc.title,
                type: "string",
              }),
            ),
          ],
          preview: {
            select: { title: "keyword", en: "en", ar: "ar" },
            prepare({ title, en, ar }) {
              return {
                title,
                subtitle: `EN: ${en || "—"} | AR: ${ar || "—"}`,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Dictionaries",
      };
    },
  },
});
