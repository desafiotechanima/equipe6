import styled from 'styled-components';

const Navbar = () => {
	return (
		<NavbarWrapper>
			<div className="navbar-brand">
				<h1>Title</h1>
			</div>
			<div className="navbar-items">
				<a href="/">Item 1</a>
				<a href="/">Item 2</a>
				<a href="/" className="">
					Login / Register
				</a>
			</div>
		</NavbarWrapper>
	);
};

const NavbarWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 7%;
	height: 80px;
	background-color: #675ef2;
	> .navbar-brand {
		> h1 {
			font-size: 1.5rem;
			color: #fff;
		}
	}

	> .navbar-items {
		> a {
			font-size: 1rem;
			margin: 0 0.5rem;
			padding: 1rem 0.5rem;
			text-decoration: none;
			color: #fff;
		}
	}
`;

export default Navbar;
