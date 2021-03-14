import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import './App.scss';
import modalActions from 'redux/modal/actions';
import Header from 'components/header/Header';
import ContentLibrary from 'components/contentLibrary/ContentLibrary';
import { selectIsModalOpen } from 'redux/modal/selectors';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  modal: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentWrapper: {
    width: '47%',
    background: 'white',
  },
  modalTitle: {
    width: '100%',
    textAlign: 'center',
    background: '#d3d3d3',
    padding: 10,
  },
  inputContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

function App() {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    understand: false,
    misunderstand: false,
  });

  const classes = useStyles();

  const isModalOpen = useSelector(selectIsModalOpen);

  const onChange = useCallback(
    (name) => (e) => {
      const { value } = e.target;

      setFormValues({
        ...formValues,
        [name]: value,
      });
    },
    [formValues]
  );

  const onCheck = useCallback(
    (yes, no) => (e) => {
      const { checked } = e.target;

      setFormValues({
        ...formValues,
        [yes]: checked,
        [no]: !checked,
      });
    },
    [formValues]
  );

  const onReset = useCallback(
    () =>
      setFormValues({
        firstName: '',
        lastName: '',
        company: '',
        jobTitle: '',
        email: '',
        understand: false,
        misunderstand: false,
      }),
    []
  );

  const onSubmit = useCallback(() => {
    const { firstName, lastName, company, email, jobTitle, understand } = formValues;
    if (firstName && lastName && company && jobTitle && email && understand) {
      alert('Successful');
    }
  }, [formValues]);

  return (
    <div className="App">
      <Header />
      <ContentLibrary />
      <Modal
        className={classes.modal}
        open={isModalOpen}
        onClose={() => {
          dispatch(modalActions.toggleModal());
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modalContentWrapper}>
          <h3 className={classes.modalTitle}>Contact Information</h3>
          <div className={classes.inputContainer}>
            <TextField
              error={!formValues.firstName.length}
              label="First Name*"
              helperText={!formValues.firstName.length && 'Required.'}
              style={{ width: '48%' }}
              value={formValues.firstName}
              onChange={onChange('firstName')}
            />
            <TextField
              error={!formValues.lastName.length}
              label="Last Name*"
              helperText={!formValues.lastName.length && 'Required.'}
              style={{ width: '48%' }}
              value={formValues.lastName}
              onChange={onChange('lastName')}
            />
            <TextField
              error={!formValues.company.length}
              label="Company*"
              helperText={!formValues.company.length && 'Required.'}
              style={{ width: '48%' }}
              value={formValues.company}
              onChange={onChange('company')}
            />
            <TextField
              error={!formValues.jobTitle.length}
              label="Job Title*"
              helperText={!formValues.jobTitle.length && 'Required.'}
              style={{ width: '48%' }}
              value={formValues.jobTitle}
              onChange={onChange('jobTitle')}
            />
            <TextField
              type="email"
              error={!formValues.email.length}
              label="Email*"
              helperText={!formValues.email.length && 'Required.'}
              style={{ width: '100%' }}
              value={formValues.email}
              onChange={onChange('email')}
            />

            <div style={{ fontWeight: 'bold' }}>
              I agree to receive emailed reports, articles, and event invitations. I understand I
              may unsubscribe at any time by clicking the link included in emails
            </div>
            <div>
              <div>
                <Radio
                  checked={formValues.understand && !formValues.misunderstand}
                  onChange={onCheck('understand', 'misunderstand')}
                />
              </div>
              <div>
                <Radio
                  checked={formValues.misunderstand}
                  onChange={onCheck('misunderstand', 'understand')}
                />
              </div>
            </div>
          </div>
          <div>
            <Button onClick={onReset}>RESET</Button>
            <Button onClick={onSubmit}>SUBMIT</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
