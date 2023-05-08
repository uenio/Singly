import { useState } from 'react';
import { Button, Col, Form, Offcanvas, Row } from 'react-bootstrap';
import { ILogObj, Logger } from 'tslog';
import { getBpm, setBpm } from '../../helpers/SoundController';

const log: Logger<ILogObj> = new Logger();

export default function PianoSettings({
    shouldHoldNote,
    handleShouldHoldNote,
}: {
    shouldHoldNote: boolean;
    handleShouldHoldNote: any;
}) {
    const [show, setShow] = useState(false);
    const [bpm, setBpmSetting] = useState(80);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function onShouldNoteChange() {
        handleShouldHoldNote();
    }

    function onBpmChange(event: any) {
        const newBpm = event.target.value;
        setBpmSetting(newBpm);
        setBpm(newBpm);
        log.debug(`bpm is ${bpm}`);
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
                        <Form.Group>
                            <Form.Label>My Label</Form.Label>
                            <Form.Range
                                value={bpm}
                                onChange={onBpmChange}
                                min={10}
                                max={120}
                            />
                        </Form.Group>
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
