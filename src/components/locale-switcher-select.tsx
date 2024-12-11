"use client"
import { useParams } from 'next/navigation';
import { routing, usePathname, useRouter } from '@/i18n/routing';
import { useState } from "react"
import { IoLanguage } from "react-icons/io5";

type Props = {
  defaultValue: string;
};

export default function LocaleSwitcherSelect({ defaultValue }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: value }
    );
  };
  const [themeToggle, setThemeToggle] = useState(false)


  return (
    <div className="theme-switch" onClick={() => setThemeToggle(!themeToggle)}>
      <IoLanguage />

      <select
        className={themeToggle ? "active" : ""}
        defaultValue={defaultValue}
        onChange={onSelectChange}
      >
        {routing.locales.map(lang => (
          <option className="option-item" key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>

    </div>
  );
}
