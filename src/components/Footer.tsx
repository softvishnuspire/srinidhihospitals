import Link from "next/link";


export const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-black text-primary font-headline mb-6">
              Karthikeya Hospitals
            </div>
            <p className="font-body text-on-surface-variant max-w-sm mb-8 leading-relaxed">
              Restoring health with precision and care. Pithapuram&apos;s most trusted multi-specialty healthcare destination since 2010.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">

              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">

              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">

              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">

              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4 font-body text-on-surface-variant">
              <li><Link href="#" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Specialists</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-primary mb-6">Support</h4>
            <ul className="space-y-4 font-body text-on-surface-variant">
              <li><Link href="#" className="hover:text-secondary transition-colors">Emergency Care</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Patient Portal</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500 font-body">
            © 2024 Karthikeya Hospitals. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-sm font-body text-slate-500">
            <Link href="#" className="hover:text-tertiary transition-colors hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:text-tertiary transition-colors hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:text-tertiary transition-colors hover:underline">Patient Rights</Link>
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-400 font-body">
            Made with ❤️ in India
          </div>
        </div>
      </div>
    </footer>
  );
};
