import { Facebook, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          className="text-gray-600 hover:text-green-600 transition-colors"
          aria-label={label}
        >
          <Icon className="h-8 w-8" />
        </a>
      ))}
    </div>
  );
}