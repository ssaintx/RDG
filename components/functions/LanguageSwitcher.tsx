import { useLocale } from 'next-intl';
import { LanguageSwitcherSelect } from './LanguageSwitcherSelect';

export const LanguageSwitcher = () => {
    const locale = useLocale();

    return (
        <LanguageSwitcherSelect
            defaultValue={locale}
            items={[
                {
                    value: 'ru',
                    label: "Rus",
                },
                {
                    value: 'en',
                    label: "Eng",
                }
            ]}
        />
    );
};