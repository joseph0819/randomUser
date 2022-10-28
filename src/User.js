const User = ({ user }) => {
  console.log(user);
  return (
    <div>
      <hr />
      <div className="individual-profile">
        <img
          src={user.picture.large}
          alt={"profile"}
          className="profile-photo"
        />
        <div className="user-info">
          <div className="names">
            <p className="fullname">{` ${user.name.title} ${user.name.first} ${user.name.last} `}</p>
            <p>{` @ ${user.login.username} `}</p>
          </div>
          <p>{` ${user.phone}`}</p>
          <p>{` ${user.email} `}</p>
          <p>{` ${user.dob.age} years `}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
