interface InquireEmailProps {
  username: string
  phone: string,
  email: string,
  services: string,
  message: string
}

export default function EnquiryEmail({
  username,
  phone,
  email,
  services,
  message,
}: InquireEmailProps) {
  return (
    <div
      style={{
        fontFamily: '"Inter", "Segoe UI", sans-serif',
        width: "100%",
        padding: "20px",
        backgroundColor: "#F5F5F5",
        boxSizing: "border-box",
      }}
    >
      {/* Container */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #E5E7EB",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "28px 24px",
            borderBottom: "1px solid #F1F1F1",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: 800,
              color: "#111111",
            }}
          >
            Camdeo Technologies
          </h1>

          <p
            style={{
              marginTop: "10px",
              fontSize: "14px",
              color: "#666",
            }}
          >
            New enquiry received from your website.
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: "24px" }}>
          {/* Contact Info */}
          <h2
            style={{
              fontSize: "16px",
              marginBottom: "16px",
              color: "#111",
            }}
          >
            Contact Information
          </h2>

          <table style={{ width: "100%", borderSpacing: 0 }}>
            <tbody>
              <tr>
                <td style={labelStyle}>Full Name</td>
                <td style={valueStyle}>{username}</td>
              </tr>

              <tr>
                <td style={labelStyle}>Phone</td>
                <td style={valueStyle}>{phone}</td>
              </tr>

              <tr>
                <td style={labelStyle}>Email</td>
                <td style={valueStyle}>{email}</td>
              </tr>

              <tr>
                <td style={labelStyle}>Service</td>
                <td style={valueStyle}>{services}</td>
              </tr>
            </tbody>
          </table>

          {/* Message */}
          <h2 style={{ fontSize: "16px", marginTop: "24px" }}>
            Message
          </h2>

          <div
            style={{
              backgroundColor: "#FAFAFA",
              border: "1px solid #EEE",
              borderRadius: "12px",
              padding: "16px",
              fontSize: "14px",
              lineHeight: 1.6,
              wordBreak: "break-word",
            }}
          >
            {message}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "16px",
            textAlign: "center",
            backgroundColor: "#FAFAFA",
            fontSize: "12px",
            color: "#888",
          }}
        >
          © 2026 Camdeo Technologies
        </div>
      </div>
    </div>
  );
}

/* Reusable Styles */
const labelStyle = {
  padding: '12px 0',
  fontSize: '14px',
  color: '#777777',
  width: '140px',
  verticalAlign: 'top' as const,
};

const valueStyle = {
  padding: '12px 0',
  fontSize: '15px',
  color: '#111111',
  fontWeight: 500,
};