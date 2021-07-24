import React from 'react';

interface IProps {
    name: string,
    email?: string,
}

const Contact = ({ name, email = "N/A" }: IProps) : JSX.Element => {
    return (
        <div className="card">
            <p>
                <strong>Name: </strong> {name}
            </p>
            <p>
                <strong>Email: </strong> {email}
            </p>
        </div>
    );
};

// export const ContactDemo: React.FunctionComponent<IProps> = ({ name, email = "N/A" }: IProps) => {
export const ContactDemo: React.FC<IProps> = ({ name, email = "N/A" }: IProps) => {
    return (
        <div className="card">
            <p>
                <strong>Name: </strong> {name}
            </p>
            <p>
                <strong>Email: </strong> {email}
            </p>
        </div>
    );
};

export default Contact;