import { newsletter } from '../lib/site';

// Email signup for the weekly newsletter, the free guide and the group waitlist.
// It only renders once NEXT_PUBLIC_NEWSLETTER_ACTION is set to the form URL of
// the email provider (for example a Mailchimp or Kit embed endpoint).
export default function Signup() {
  if (!newsletter.action) return null;

  return (
    <section id="signup" className="signup light" aria-labelledby="signup-title">
      <div className="wrap sec">
        <div className="signup-grid">
          <div className="reveal">
            <h2 id="signup-title" className="serif h2">
              Practical ideas, once a week.
            </h2>
            <p className="body">
              Everyday parenting and busy-life ideas you can use the same day.
              Join and you hear first when the next group program opens.
            </p>
          </div>
          <form
            className="signup-form reveal"
            action={newsletter.action}
            method="post"
            target="_blank"
            rel="noopener"
          >
            <label htmlFor="signup-email">Email address</label>
            <div className="signup-row">
              <input
                id="signup-email"
                type="email"
                name={newsletter.field}
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
              <button className="btn btn-solid" type="submit">
                Sign me up
              </button>
            </div>
            <p className="signup-note">Free. Unsubscribe any time.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
