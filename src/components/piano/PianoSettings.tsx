import { useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { ILogObj, Logger } from 'tslog';

const log: Logger<ILogObj> = new Logger();

export default function PianoSettings({
    shouldHoldNote,
    handleShouldHoldNote,
}: {
    shouldHoldNote: boolean;
    handleShouldHoldNote: any;
}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function onShouldNoteChange() {
        handleShouldHoldNote();
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow} className="me-2">
                Settings
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.\
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Hold Note"
                            checked={shouldHoldNote}
                            onChange={onShouldNoteChange}
                        />
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}
