import Box from "./Box";

export const ComponentDisplay = (props) => {
  const { details, username } = props.info;
  const { repositoryOwner } = details;

  return (
    <div>
      <h1>
        <code>{username}</code>'s data
      </h1>
      {repositoryOwner ? (
        <div className="ContributionsContainer">
          {repositoryOwner.contributionsCollection.contributionCalendar.weeks.map(
            ({ contributionDays: week }, index) => (
              <div className="row" key={index}>
                {week &&
                  week.map((curr) => (
                    <Box color={curr.color} date={curr.date} key={curr.date} />
                  ))}
              </div>
            )
          )}
        </div>
      ) : (
        <div>
          <span>
            <code>{username}</code> does not exist
          </span>
        </div>
      )}
    </div>
  );
};

export default ComponentDisplay;
