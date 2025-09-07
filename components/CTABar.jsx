import Button from './Button';

export default function CTABar({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      {items.map((btn, i) => (
        <a key={i} href={btn.href} className="w-fit">
          <Button name={btn.label} isBeam={btn.beam} />
        </a>
      ))}
    </div>
  );
}

