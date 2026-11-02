import React, { useState } from "react";
import { X, Calendar, Clock, Users, CheckCircle2, Phone, User, MessageSquare } from "lucide-react";
import { ReservationFormData } from "../../types";
import { reservationService } from "../../services/reservationService";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: "",
    phone: "",
    email: "",
    date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    time: "19:30",
    guests: 2,
    seatingPreference: "any",
    specialRequests: "",
  });

  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<{
    code: string;
    message: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await reservationService.submitReservation(formData);
      if (res.success && res.confirmationCode) {
        setSuccessResult({
          code: res.confirmationCode,
          message: res.message,
        });
      } else {
        setErrorMsg(res.message);
      }
    } catch {
      setErrorMsg("Failed to connect to reservation service. Please try again or WhatsApp us.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessResult(null);
    setErrorMsg(null);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close reservation dialog"
        >
          <X size={20} />
        </button>

        {!successResult ? (
          <>
            <div style={{ marginBottom: "20px" }}>
              <div className="eyebrow" style={{ marginBottom: "4px" }}>
                <span className="eyebrow__dot" />
                Table & Sadhya Reservation
              </div>
              <h2 style={{ fontSize: "1.75rem", color: "var(--color-ink)" }}>
                Book Your Table at Oota Thindi
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)", marginTop: "4px" }}>
                Reserve your dining spot for family gatherings, weekend Sadhyas, or casual tiffin.
              </p>
            </div>

            {errorMsg && (
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(169, 47, 41, 0.12)",
                  color: "var(--color-deep-red)",
                  fontSize: "0.88rem",
                  marginBottom: "16px",
                  fontWeight: 600,
                }}
              >
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="res-name">
                  Full Name *
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    id="res-name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Ramesh Iyer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <User size={16} style={{ position: "absolute", right: "14px", top: "14px", color: "var(--color-ink-subtle)" }} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="res-phone">
                    Phone / WhatsApp *
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <Phone size={16} style={{ position: "absolute", right: "14px", top: "14px", color: "var(--color-ink-subtle)" }} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="res-guests">
                    Number of Guests *
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      id="res-guests"
                      className="form-select"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                    <Users size={16} style={{ position: "absolute", right: "14px", top: "14px", color: "var(--color-ink-subtle)" }} />
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="res-date">
                    Date *
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      id="res-date"
                      type="date"
                      required
                      className="form-input"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                    <Calendar size={16} style={{ position: "absolute", right: "14px", top: "14px", color: "var(--color-ink-subtle)" }} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="res-time">
                    Preferred Time Slot *
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      id="res-time"
                      className="form-select"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <optgroup label="Morning Tiffin">
                        <option value="08:30">08:30 AM</option>
                        <option value="09:30">09:30 AM</option>
                        <option value="10:30">10:30 AM</option>
                      </optgroup>
                      <optgroup label="Afternoon Lunch & Sadhya">
                        <option value="12:30">12:30 PM</option>
                        <option value="13:30">01:30 PM</option>
                        <option value="14:30">02:30 PM</option>
                      </optgroup>
                      <optgroup label="Evening Tiffin & Dinner">
                        <option value="17:00">05:00 PM</option>
                        <option value="18:30">06:30 PM</option>
                        <option value="19:30">07:30 PM</option>
                        <option value="20:30">08:30 PM</option>
                        <option value="21:30">09:30 PM</option>
                      </optgroup>
                    </select>
                    <Clock size={16} style={{ position: "absolute", right: "14px", top: "14px", color: "var(--color-ink-subtle)" }} />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="res-seating">
                  Seating Area Preference
                </label>
                <select
                  id="res-seating"
                  className="form-select"
                  value={formData.seatingPreference}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seatingPreference: e.target.value as "indoor" | "patio" | "any",
                    })
                  }
                >
                  <option value="any">First Available Table</option>
                  <option value="patio">Al Fresco Patio & Courtyard</option>
                  <option value="indoor">Indoor Dining Room</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="res-notes">
                  Special Notes / Jain Dietary Needs (Optional)
                </label>
                <textarea
                  id="res-notes"
                  className="form-textarea"
                  rows={2}
                  placeholder="e.g. 2 guests require Jain food without root vegetables; Birthday celebration"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn--primary"
                style={{ width: "100%", marginTop: "8px" }}
              >
                {loading ? "Confirming Availability..." : "Confirm Reservation Request"}
              </button>
            </form>
          </>
        ) : (
          /* Confirmation Screen */
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <CheckCircle2
              size={64}
              style={{ color: "var(--color-leaf-green)", margin: "0 auto 16px" }}
            />
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="eyebrow__dot" />
              Reservation Requested
            </div>
            <h2 style={{ fontSize: "1.8rem", color: "var(--color-ink)", marginBottom: "12px" }}>
              We Look Forward to Welcoming You!
            </h2>
            <div
              className="glass-card"
              style={{
                padding: "20px",
                margin: "20px 0",
                background: "rgba(244, 233, 201, 0.4)",
              }}
            >
              <div style={{ fontSize: "0.85rem", color: "var(--color-ink-muted)", textTransform: "uppercase" }}>
                Reference Code
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "var(--color-maroon)",
                }}
              >
                {successResult.code}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--color-ink)", marginTop: "8px" }}>
                {formData.guests} Guest(s) · {formData.date} at {formData.time}
              </div>
            </div>

            <p style={{ fontSize: "0.92rem", color: "var(--color-ink-muted)", marginBottom: "24px" }}>
              {successResult.message}
            </p>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button type="button" className="btn btn--primary" onClick={handleReset}>
                Done
              </button>
              <a
                href={`https://wa.me/918291533533?text=Hello%20The%20Oota%20Thindi,%20I%20have%20submitted%20reservation%20code%20${successResult.code}.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn--secondary"
              >
                <MessageSquare size={16} />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
