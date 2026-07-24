const OFFICE_PHONE = {
  display: "+380 (67) 456 02 92",
  href: "tel:+380674560292",
};

const EMERGENCY_PHONE = {
  display: "+380 (67) 430 59 71",
  href: "tel:+380674305971",
};

const CONTACT_EMAIL = {
  display: "rembudlift@gmail.com",
  href: "mailto:rembudlift@gmail.com",
};

export default function Home() {
  return (
    <>
      <div className="page-shell">
        <header className="site-header">
          <div className="brand" aria-label="РЕМБУД МОНТАЖ ЛІФТ">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
            </span>
            <span>РЕМБУД МОНТАЖ ЛІФТ</span>
          </div>

          <div className="site-status">
            <span aria-hidden="true" />
            Оновлюємо сайт
          </div>
        </header>

        <main className="hero">
          <section className="hero-copy" aria-labelledby="page-title">
            <p className="eyebrow">Надійний рух щодня</p>
            <h1 id="page-title">Сайт у розробці</h1>
            <p className="lead">
              Ми оновлюємо сайт, щоб зробити його зручнішим. А поки що —
              телефонуйте, ми на зв’язку.
            </p>
            <div className="accent-rule" aria-hidden="true" />
          </section>

          <section className="contact-panel" aria-labelledby="contacts-title">
            <h2 className="panel-label" id="contacts-title">
              Контакти
            </h2>

            <a
              className="contact-card office-card"
              href={OFFICE_PHONE.href}
              aria-label={`Зателефонувати в офіс: ${OFFICE_PHONE.display}. Офіс працює з понеділка по п’ятницю з 09:00 до 17:00. Субота та неділя — вихідні`}
            >
              <span className="contact-copy">
                <span className="contact-heading">Офіс</span>
                <span className="office-hours">
                  <strong>Пн–Пт · 09:00–17:00</strong>
                  <span>Сб–Нд — вихідні</span>
                </span>
                <span className="phone-number">{OFFICE_PHONE.display}</span>
                <span className="contact-action">Зателефонувати в офіс</span>
              </span>
              <span className="call-arrow" aria-hidden="true" />
            </a>

            <a
              className="contact-card emergency-card"
              href={EMERGENCY_PHONE.href}
              aria-label={`Терміново зателефонувати в аварійну службу: ${EMERGENCY_PHONE.display}. Працює цілодобово по місту Вінниця`}
            >
              <span className="contact-copy">
                <span className="contact-heading">
                  Аварійна служба
                  <span className="always-open">Цілодобово</span>
                </span>
                <span className="service-area">Працюємо по місту Вінниця</span>
                <span className="phone-number">{EMERGENCY_PHONE.display}</span>
                <span className="contact-action">Терміново зателефонувати</span>
              </span>
              <span className="call-arrow" aria-hidden="true" />
            </a>

            <a
              className="contact-card email-card"
              href={CONTACT_EMAIL.href}
              aria-label={`Написати на електронну пошту: ${CONTACT_EMAIL.display}`}
            >
              <span className="contact-copy">
                <span className="contact-heading">Електронна пошта</span>
                <span className="email-address">{CONTACT_EMAIL.display}</span>
                <span className="contact-action">Написати нам</span>
              </span>
              <span className="call-arrow" aria-hidden="true" />
            </a>

            <div className="lift-motif" aria-hidden="true">
              <span className="floor-number">08</span>
              <span className="lift-door" />
              <span className="lift-door" />
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <span>Монтаж · Обслуговування · Ремонт ліфтів</span>
          <strong>Працюємо для вашої безпеки</strong>
        </footer>
      </div>
    </>
  );
}
