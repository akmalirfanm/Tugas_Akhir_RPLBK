import FormAdd from '../components/FormAdd';
import Layout from '../components/Layout';
import './AddCharacter.css';

export default function AddCharacter() {
  return (
    <Layout>
      <div className="add-character">
        <h1>Add Character</h1>
        <FormAdd />
      </div>
    </Layout>
  );
}
