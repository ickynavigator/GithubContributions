import { Contributions } from "../../utils/queries";
import { client } from "../../utils/helpers";
import { ContributionDisplay } from "../../components";

export const getServerSideProps = async (context) => {
  const { username } = context.params;
  const contributionDetails = await client.query({
    query: Contributions,
    variables: { username }
  });

  return { props: { details: contributionDetails.data, username } };
};

export const Index = (props) => <ContributionDisplay info={props} />;

export default Index;
