import { useLocale } from 'next-intl';
import { LanguageSwitcherSelect } from './LanguageSwitcherSelect';

export const LanguageSwitcher = () => {
    const locale = useLocale();

    return (
        <LanguageSwitcherSelect
            defaultValue={locale}
            items={[
                {
                    value: 'uz',
                    label: "Uzb",
                    icon: '/icons/uz.svg',
                },
                {
                    value: 'ru',
                    label: "Rus",
                    icon: '/icons/ru.svg',
                },
                {
                    value: 'en',
                    label: "Eng",
                    icon: '/icons/en.svg',
                }
            ]}
        />
    );
};