import AppContainer from "../components/AppContainer";

export default function Account() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return null;

  return (
    <AppContainer>
      <h2 className="account-title">Account Settings</h2>

      <div className="account-card">
        <div className="profile-row">
          <div className="profile-pic-wrapper">
            <img
              src="https://i.pravatar.cc/100?img=32"
              alt="profile"
              className="profile-pic"
            />
            <span className="camera-icon">📷</span>
          </div>

          <div className="profile-text">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        </div>

        <p className="account-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>
    </AppContainer>
  );
}
