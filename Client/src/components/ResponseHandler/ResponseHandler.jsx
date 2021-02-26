import Error from '../Notification/Error/Error';
import Network from '../Notification/Error/Network';
import Success from '../Notification/Success/Success';

const ResponseHandler = ({ error, data }) => {
  return (
    <>
      {error?.message && <Network msg={error?.message} />}

      {error?.errors?.map(
        (item, index) =>
          item.field === undefined && (
            <Error key={item.message} msg={item.message} />
          )
      )}

      {error?.errors?.length > 0 && error?.errors[0]?.field !== undefined ? (
        <Error msg="Please fix all the errors" />
      ) : null}

      {data?.message && <Success msg={data.message} />}
    </>
  );
};

export default ResponseHandler;
