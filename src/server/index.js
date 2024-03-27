import { request, gql } from 'graphql-request';

const grahqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getHeaders = async () => {
	const query = gql`
		query Assets {
			headersConnection {
				edges {
					node {
						id
						slug
						text
					}
				}
			}
		}
	`;
	const result = await request(grahqlAPI, query);
	return result.headersConnection.edges;
};
export const getHero = async () => {
	const query = gql`
		query Assets {
			heroesConnection {
				edges {
					node {
						id
						decs
						img {
							url
						}
						slug
						text
					}
				}
			}
		}
	`;
	const result = await request(grahqlAPI, query);
	return result.heroesConnection.edges;
};
export const getPorfolio = async () => {
	const query = gql`
		query Assets {
			portfoliosConnection {
				edges {
					node {
						decs
						text
						img {
							url
						}
						id
					}
				}
			}
		}
	`;
	const result = await request(grahqlAPI, query);
	return result.portfoliosConnection.edges;
};
export const getAbout = async () => {
	const query = gql`
		query Assets {
			aboutsConnection {
				edges {
					node {
						desc
						id
						img {
							url
						}
						text
					}
				}
			}
		}
	`;
	const result = await request(grahqlAPI, query);
	return result.aboutsConnection.edges;
};
export const getScill = async () => {
	const query = gql`
		query Assets {
			scillsConnection {
				edges {
					node {
						id
						text
						img {
							url
						}
					}
				}
			}
		}
	`;
	const result = await request(grahqlAPI, query);
	return result.scillsConnection.edges;
};
export const getAbaoutPage = async () => {
	const query = gql`
		query Assets {
			aboutpageConnection {
				edges {
					node {
						img {
							url
						}
						id
					}
				}
			}
		}
	`;
	const result = await request(grahqlAPI, query);
	return result.aboutpageConnection.edges;
};
