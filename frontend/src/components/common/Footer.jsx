import React, { useState } from 'react';
import { MessageSquarePlus, X, Send, Star } from 'lucide-react';
import { SignInLogo } from './Icons';

/**
 * Shared site footer.
 *  - variant="full"    -> rich marketing footer (landing / auth / preferences pages)
 *  - variant="compact" -> slim single-row bar (fixed-height dashboard pages)
 *
 * Both variants expose a Feedback option that opens a lightweight feedback modal.
 */
export const Footer = ({ triggerToast, variant = 'full' }) => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState('suggestion');
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(0);

  const openFeedback = (e) => {
    e?.preventDefault?.();
    setFeedbackOpen(true);
  };

  const closeFeedback = () => {
    setFeedbackOpen(false);
    setFeedbackText('');
    setFeedbackType('suggestion');
    setRating(0);
  };

  const submitFeedback = (e) => {
    e.preventDefault();
    if (!feedbackText.trim()) {
      triggerToast?.('Please write a little about your feedback first.', 'error');
      return;
    }
    closeFeedback();
    triggerToast?.('Thanks for your feedback! Our team will review it shortly.');
  };

  const feedbackModal = feedbackOpen && (
    <div className="feedback-overlay" onClick={closeFeedback}>
      <form
        className="feedback-modal"
        onClick={(e) => e.stopPropagation()}
        onSubmit={submitFeedback}
      >
        <div className="feedback-modal-header">
          <div>
            <h3 className="feedback-modal-title">Share your feedback</h3>
            <p className="feedback-modal-sub">
              Help us make EcoMatch better for every business.
            </p>
          </div>
          <button
            type="button"
            className="feedback-close-btn"
            aria-label="Close feedback"
            onClick={closeFeedback}
          >
            <X size={20} />
          </button>
        </div>

        <div className="feedback-type-row">
          {[
            { id: 'suggestion', label: 'Suggestion' },
            { id: 'issue', label: 'Issue' },
            { id: 'praise', label: 'Praise' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              className={`feedback-type-chip ${feedbackType === t.id ? 'active' : ''}`}
              onClick={() => setFeedbackType(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="feedback-rating">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              className={`feedback-star ${n <= rating ? 'active' : ''}`}
              aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
              onClick={() => setRating(n)}
            >
              <Star size={20} fill={n <= rating ? 'currentColor' : 'none'} />
            </button>
          ))}
        </div>

        <textarea
          className="feedback-textarea"
          placeholder="Tell us what's working well or what we could improve..."
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
        />

        <button type="submit" className="feedback-submit-btn">
          <Send size={16} />
          Send Feedback
        </button>
      </form>
    </div>
  );

  if (variant === 'compact') {
    return (
      <>
        <footer className="app-footer-bar">
          <span className="app-footer-bar-copy">
            © {new Date().getFullYear()} EcoMatch. All rights reserved.
          </span>
          <div className="app-footer-bar-links">
            <a href="#about" onClick={(e) => { e.preventDefault(); triggerToast?.('About EcoMatch'); }}>About</a>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); triggerToast?.('Privacy Policy'); }}>Privacy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); triggerToast?.('Terms & Conditions'); }}>Terms</a>
            <button type="button" className="footer-feedback-btn" onClick={openFeedback}>
              <MessageSquarePlus size={15} />
              Feedback
            </button>
          </div>
        </footer>
        {feedbackModal}
      </>
    );
  }

  return (
    <>
      <footer className="landing-footer">
        <div className="landing-footer-container">
          <div className="landing-footer-grid">

            {/* Branding Column */}
            <div className="landing-footer-col brand-col">
              <div className="landing-footer-brand">
                <SignInLogo size={32} color="#15803D" />
                <span className="landing-brand-name">EcoMatch</span>
              </div>
              <p className="landing-brand-desc">
                Connecting companies to build a circular economy through industrial symbiosis.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="landing-footer-col">
              <span className="footer-title-text">Company</span>
              <ul className="footer-links-list">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); triggerToast?.('About EcoMatch'); }}>About Us</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); triggerToast?.('Contact Us'); }}>Contact Us</a></li>
                <li>
                  <a href="#feedback" className="footer-feedback-link" onClick={openFeedback}>
                    <MessageSquarePlus size={15} />
                    Send Feedback
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links Column */}
            <div className="landing-footer-col">
              <span className="footer-title-text">Legal</span>
              <ul className="footer-links-list">
                <li><a href="#privacy" onClick={(e) => { e.preventDefault(); triggerToast?.('Privacy Policy'); }}>Privacy Policy</a></li>
                <li><a href="#terms" onClick={(e) => { e.preventDefault(); triggerToast?.('Terms & Conditions'); }}>Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Social Media Column */}
            <div className="landing-footer-col">
              <span className="footer-title-text">Connect</span>
              <div className="landing-footer-socials">
                <a href="#linkedin" className="social-link-icon" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#twitter" className="social-link-icon" aria-label="Twitter" onClick={(e) => e.preventDefault()}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#facebook" className="social-link-icon" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          <div className="landing-footer-bottom">
            <span className="copyright-text">
              © {new Date().getFullYear()} EcoMatch. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
      {feedbackModal}
    </>
  );
};

export default Footer;
