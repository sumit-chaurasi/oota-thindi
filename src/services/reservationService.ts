import { ReservationFormData } from "../types";

export interface ReservationResponse {
  success: boolean;
  message: string;
  confirmationCode?: string;
}

export const reservationService = {
  submitReservation: async (
    data: ReservationFormData
  ): Promise<ReservationResponse> => {
    // Simulate real network request validation
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!data.name || !data.phone || !data.date || !data.time) {
      return {
        success: false,
        message: "Please fill in all required fields (Name, Phone, Date, and Time).",
      };
    }

    const code = "OT-" + Math.floor(100000 + Math.random() * 900000);

    // In a live backend deployment, this records to Postgres/Prisma or sends to restaurant WhatsApp API
    return {
      success: true,
      message: `Thank you, ${data.name}! Your reservation request for ${data.guests} guest(s) on ${data.date} at ${data.time} has been received. Confirmation code: ${code}. The restaurant team will confirm via WhatsApp or phone.`,
      confirmationCode: code,
    };
  },
};
