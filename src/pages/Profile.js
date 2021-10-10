import React from 'react';
import PageTitle from '../components/PageTitle';
import PaperForm from '../components/PaperForm';
import Form from '../components/Form';
import Controls from '../components/controls/Controls';

export default function Profile(props) {
  const sectors = [
    { name: 'Technology'},
    { name: 'Engineering'},
    { name: 'Health'},
  ]

  return (
    <>
      <PageTitle title='Profile'/>
      <PaperForm>
        <Form>
          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label='Desired job title' />
            <Controls.TextFieldCustom placeholder="Desired job title" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label='Min salary per annum' />
            <Controls.TextFieldCustom placeholder="Min salary per annum" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Job type" />
            <Controls.CheckboxCustom value='Permanent' />
            <Controls.CheckboxCustom value='Temporary' />
            <Controls.CheckboxCustom value='Conract' />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Sector" />
            <Controls.SelectCustom items={sectors} />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Experience" />
            <Controls.TextareaCustom placeholder="Experience" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.ButtonCustom text="Submit" />
          </Controls.FormGroupCustom>
        </Form>
      </PaperForm>
    </>
  )
}
