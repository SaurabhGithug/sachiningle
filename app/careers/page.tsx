import VogueCareers from '@/components/vogue/careers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Sachin Ingle',
  description: 'Join our team and build the future of Nagpur real estate.',
};

export default function CareersPage() {
  return (
    <main>
      <VogueCareers />
    </main>
  );
}
