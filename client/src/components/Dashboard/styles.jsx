import styled from 'styled-components';

export const Container = styled.div`
	padding: 7% 7%;
`;

export const CalendarWrapper = styled.div`
	@media (min-width: 768px) {
		/* width: 50%; */
		margin: 0 auto;
	}
	@media (min-width: 1024px) {
		/* width: 50%; */
		margin: 0 auto;
	}

	@media (min-width: 1440px) {
		/* width: 50%; */
		margin: 0 auto;
	}

	@media (min-width: 1920px) {
		/* width: 50%; */
		margin: 0 auto;
	}
`;

export const DescriptionWrapper = styled.div`
	> h1 {
		font-size: 2rem;
	}

	> h2 {
		font-size: 1.5rem;
	}
`;
