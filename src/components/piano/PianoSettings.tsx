import { useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { ILogObj, Logger } from 'tslog';
import { setBpm } from '../../helpers/SoundController';

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
                    <Offcanvas.Title>Settings</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        General
                        <Form.Group>
                            <Form.Label>BPM</Form.Label>
                            <Form.Range
                                value={bpm}
                                onChange={onBpmChange}
                                min={10}
                                max={120}
                            />
                        </Form.Group>
                        Piano Playing
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
