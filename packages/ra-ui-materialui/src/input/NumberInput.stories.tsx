import * as React from 'react';
import { Resource, required } from 'ra-core';
import { useFormState, useFormContext } from 'react-hook-form';

import { NumberInput } from './NumberInput';
import { AdminContext } from '../AdminContext';
import { Create, Edit } from '../detail';
import { SimpleForm } from '../form';
import { FormInspector } from './common';
import { TextInput } from './TextInput';
import { Admin } from 'react-admin';
import { BooksCreate } from './common/BooksCreate';
import { BooksList } from './common/BooksList';
import { dataProvider } from './common/dataProvider';
import { history } from './common/history';

export default { title: 'ra-ui-materialui/input/NumberInput' };

export const Basic = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" />
                <FormInspector name="views" />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const ReadOnly = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" readOnly />
                <FormInspector name="views" />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const Disabled = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" disabled />
                <FormInspector name="views" />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const Float = () => (
    <AdminContext>
        <Create
            resource="poi"
            record={{ id: 123, lat: 48.692054, long: 6.184417 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="lat" />
                <NumberInput source="long" />
                <FormInspector name="lat" />
                <FormInspector name="long" />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const DefaultValue = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" defaultValue={26} />
                <NumberInput
                    source="views1"
                    label="Default 6"
                    defaultValue={6}
                />
                <NumberInput
                    source="views2"
                    label="Default 0"
                    defaultValue={0}
                />
                <NumberInput source="views3" label="Default undefined" />
                <FormInspector name="views" />
                <FormInspector name="views1" />
                <FormInspector name="views2" />
                <FormInspector name="views3" />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const HelperText = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" />
                <NumberInput source="views" helperText={false} />
                <NumberInput
                    source="views"
                    helperText="Number of times the post was read"
                />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const Label = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" />
                <NumberInput source="views" label={false} />
                <NumberInput source="views" label="Number of views" />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const FullWidth = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" label="default" />
                <NumberInput source="views" label="Full Width" fullWidth />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const Margin = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" label="default (dense)" />
                <NumberInput source="views" label="none" margin="none" />
                <NumberInput source="views" label="normal" margin="normal" />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const Variant = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" label="default (filled)" />
                <NumberInput
                    source="views"
                    label="outlined"
                    variant="outlined"
                />
                <NumberInput
                    source="views"
                    label="standard"
                    variant="standard"
                />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const Step = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" label="No step" />
                <NumberInput source="views" label="Step 0.1" step={0.1} />
                <NumberInput source="views" label="Step 10" step={10} />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const MinMax = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" label="No min or max" />
                <NumberInput
                    source="views"
                    label="Min 20, max 30"
                    min={20}
                    max={30}
                />
                <NumberInput source="views" label="Min 50" min={50} />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const Required = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" />
                <NumberInput source="views" required />
                <NumberInput source="views" validate={required()} />
                <NumberInput source="views" validate={[required()]} />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const Error = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm
                resolver={() => ({
                    values: {},
                    errors: {
                        views: {
                            type: 'custom',
                            message: 'Special error message',
                        },
                    },
                })}
            >
                <NumberInput source="views" />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const Sx = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput
                    source="views"
                    sx={{
                        border: 'solid 1px red',
                        borderRadius: '5px',
                        '& .MuiInputLabel-root': { fontWeight: 'bold' },
                    }}
                />
            </SimpleForm>
        </Create>
    </AdminContext>
);

const FormStateInspector = () => {
    const {
        touchedFields,
        isDirty,
        dirtyFields,
        isValid,
        errors,
    } = useFormState();
    return (
        <div>
            form state:&nbsp;
            <code style={{ backgroundColor: 'lightgrey' }}>
                {JSON.stringify({
                    touchedFields,
                    isDirty,
                    dirtyFields,
                    isValid,
                    errors,
                })}
            </code>
        </div>
    );
};

const FieldStateInspector = ({ name = 'views' }) => {
    const formContext = useFormContext();
    return (
        <div>
            {name}:
            <code style={{ backgroundColor: 'lightgrey' }}>
                {JSON.stringify(
                    formContext.getFieldState(name, formContext.formState)
                )}
            </code>
        </div>
    );
};

export const FieldState = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" />
                <FormStateInspector />
                <FieldStateInspector />
            </SimpleForm>
        </Create>
    </AdminContext>
);

export const ShouldUnregister = () => (
    <AdminContext>
        <Create
            resource="posts"
            record={{ id: 123, views: 23 }}
            sx={{ width: 600 }}
        >
            <SimpleForm>
                <NumberInput source="views" shouldUnregister />
            </SimpleForm>
        </Create>
    </AdminContext>
);

const SetFocusButton = ({ source }) => {
    const { setFocus } = useFormContext();
    return (
        <button onClick={() => setFocus(source)}>Set focus on {source}</button>
    );
};

export const SetFocus = () => (
    <AdminContext>
        <Create resource="posts" sx={{ width: 600 }}>
            <SimpleForm>
                <TextInput source="title" />
                <NumberInput source="views" />
                <SetFocusButton source="views" />
            </SimpleForm>
        </Create>
    </AdminContext>
);

const BooksEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title.en" label="Title" />
            <NumberInput source="year" readOnly />
        </SimpleForm>
    </Edit>
);

export const FullApp = () => {
    React.useEffect(() => {
        history.replace('/books/5/edit');
    }, []);

    return (
        <Admin dataProvider={dataProvider} history={history}>
            <Resource
                name="books"
                list={BooksList}
                edit={BooksEdit}
                create={BooksCreate}
            />
        </Admin>
    );
};
