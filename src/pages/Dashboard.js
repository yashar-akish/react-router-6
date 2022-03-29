

const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>Dashboard Page</h4>
      <hr />
      <h5>Hello, {user?.name}</h5>
      <p>{user?.email}</p>
    </section>
  );
};
export default Dashboard;
