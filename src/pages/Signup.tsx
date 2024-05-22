import BoldLink from '../components/BoldLink'

export default function Signup() {
    return (
        <>
          <div>
            <img src="" alt="Auction cards screenshot" />
            <div>
              <img src="" alt="Company logo" />
              <h2>Hello!</h2>
              <p>Please enter your details</p>
              <form action="post">
                <label htmlFor="name">Name
                  <input type="text" name="name" id="name" maxLength={20} />
                </label>
                <label htmlFor="surname">Surname
                  <input type="text" name="surname" id="surname" maxLength={20} />
                </label>
                <label htmlFor="email">E-mail
                  <input type="email" name="email" id="email" />
                </label>
                <label htmlFor="password">Password
                  <input type="password" name="password" id="password" pattern="/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/" />
                </label>
                <label htmlFor="confirmPassword">Repeat password
                  <input type="password" name="confirmPassword" id="confirmPassword" pattern="/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/" />
                </label>
                <button type="submit">Sign up</button>
              </form>
            </div>
            <p>Already have an account? <BoldLink text={"Log in"} href={"/login"} /></p>
          </div>
        </>
    )
}