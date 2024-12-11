"use client"
import { useParams } from 'next/navigation';
import { routing, usePathname, useRouter } from '@/i18n/routing';
import { useState } from "react"
import { IoLanguage } from "react-icons/io5";
import "./LangChange.scss"
type Props = {
  defaultValue: string;
};

export default function LangChange({ defaultValue }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [themeToggle, setThemeToggle] = useState(false);

  const onSelectChange = (value: string) => {
    setSelectedValue(value);
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: value }
    );

  };

  return (
    <>
      <div className="theme-switch" onClick={() => setThemeToggle(!themeToggle)}>
        <IoLanguage />

      </div>
      
      <div style={{ display: "none" }}>{selectedValue}</div>

      <div className={`dropdown-options ${themeToggle ? "active" : ""}`}>
        {routing.locales.map(lang => (
          <div
            className="option-item"
            key={lang}
            onClick={() => onSelectChange(lang)}
          >
            {lang}

          </div>
        ))}
      </div>
    </>
  );
}
