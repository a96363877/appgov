import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Page() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto">المركز الوطني </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Login Card */}
          <Card className="md:col-span-4 p-6 space-y-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold text-right">تسجيل الدخول</h2>
            <div className="space-y-3">
              <Input
                type="text"
                placeholder="اسم المستخدم"
                className="text-right"
              />
              <Input
                type="password"
                placeholder="كلمة المرور"
                className="text-right"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                دخول
              </Button>
            </div>
          </Card>

          {/* Navigation Grid */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { icon: '🏢', label: 'خدمات حكومية' },
                { icon: '📋', label: 'طلبات' },
                { icon: '📱', label: 'تطبيقات' },
                { icon: '📊', label: 'تقارير' },
                { icon: '👥', label: 'العملاء' },
                { icon: '📄', label: 'معاملات' },
                { icon: '⚙️', label: 'إعدادات' },
                { icon: '📈', label: 'إحصائيات' },
                { icon: '🌐', label: 'خدمات إلكترونية' },
                { icon: '📑', label: 'نماذج' },
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="text-sm text-center">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile App Banner */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-right mb-4 md:mb-0">
            </div>
            <Image
              src="/mpa.png"
              alt="Mobile App"
              width={1220}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
