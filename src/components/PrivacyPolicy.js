import Footer from "./Footer";
import Header from "./Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="privacy-policy">
        <div className="privacy-policy-container">
          <h1>Polityka Prywatności MW-Engineering</h1>
          <p>
            <strong>Data ostatniej aktualizacji:</strong> 8.10.2026 r.
          </p>
          <h2>1. Administrator danych osobowych</h2>
          <p>Administratorem danych osobowych jest:</p>
          <p>
            <strong>MW-Engineering Mariusz Wąchocki</strong>
            <br />
            ul. Spacerowa 10H/2
            <br />
            26-052 Zagrody
            <br />
            e-mail:{" "}
            <a href="mailto:biuro@mw-engineering.pl">biuro@mw-engineering.pl</a>
            <br />
            tel.{" "}
            <a href="tel:+48695413382">+48 695 413 382</a>
          </p>
          <h2>2. Jakie dane przetwarzamy?</h2>
          <p>Za pośrednictwem formularza kontaktowego mogą być przetwarzane:</p>
          <ul>
            <li>- imię i nazwisko,</li>
            <li>- nazwa firmy,</li>
            <li>- adres e-mail,</li>
            <li>- numer telefonu,</li>
            <li>- stanowisko (opcjonalnie),</li>
            <li>- treść wiadomości,</li>
            <li>- załączone pliki.</li>
          </ul>
          <h2>3. Cel przetwarzania danych</h2>
          <p>Dane są przetwarzane wyłącznie w celu:</p>
          <ul>
            <li>- udzielenia odpowiedzi na przesłane zapytanie,</li>
            <li>- prowadzenia korespondencji,</li>
            <li>- przygotowania oferty współpracy.</li>
          </ul>
          <h2>4. Podstawa prawna przetwarzania</h2>
          <p>
            Dane przetwarzane są zgodnie z art. 6 ust. 1 lit. b oraz lit. f
            Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).
          </p>
          <h2>5. Odbiorcy danych</h2>
          <p>
            Dane mogą być przekazywane wyłącznie podmiotom świadczącym usługi
            niezbędne do funkcjonowania strony internetowej, takim jak:
          </p>
          <ul>
            <li>- dostawca hostingu,</li>
            <li>- dostawca poczty elektronicznej.</li>
          </ul>
          <p>
            Dane nie są sprzedawane ani przekazywane podmiotom trzecim w celach
            marketingowych.
          </p>
          <h2>6. Okres przechowywania danych</h2>
          <p>
            Dane będą przechowywane przez okres niezbędny do prowadzenia
            korespondencji oraz realizacji współpracy lub do czasu wynikającego
            z obowiązujących przepisów prawa.
          </p>
          <h2>7. Prawa użytkownika</h2>
          <p>Każdej osobie przysługuje prawo do:</p>
          <ul>
            <li>- dostępu do swoich danych,</li>
            <li>- ich sprostowania,</li>
            <li>- usunięcia danych,</li>
            <li>- ograniczenia przetwarzania,</li>
            <li>- przenoszenia danych,</li>
            <li>- wniesienia sprzeciwu wobec przetwarzania,</li>
            <li>
              - wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
            </li>
          </ul>
          <h2>8. Pliki cookies</h2>
          <p>
            Strona wykorzystuje wyłącznie pliki cookies niezbędne do jej
            prawidłowego działania. W przypadku wdrożenia narzędzi analitycznych
            lub marketingowych niniejsza polityka zostanie odpowiednio
            zaktualizowana.
          </p>
          <h2>9. Google Maps</h2>
          <p>
            Na stronie znajduje się osadzona mapa Google Maps. Korzystanie z
            mapy może wiązać się z przetwarzaniem danych przez Google zgodnie z
            ich Polityką Prywatności.
          </p>
          <h2>10. Kontakt</h2>
          <p>
            W sprawach dotyczących ochrony danych osobowych prosimy o kontakt:
          </p>
          <p>
            <strong>MW-Engineering Mariusz Wąchocki</strong>
            <br />
            e-mail:
            <a href="mailto:biuro@mw-engineering.pl">biuro@mw-engineering.pl</a>
            <br />
            tel.
            <a href="tel:+48695413382">+48 695 413 382</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
