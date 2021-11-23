import { gql } from "@apollo/client";

export const Contributions = gql`
  query Query($username: String!) {
    repositoryOwner(login: $username) {
      ... on User {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                color
                contributionCount
                contributionLevel
                weekday
                date
              }
            }
          }
        }
      }
    }
  }
`;
