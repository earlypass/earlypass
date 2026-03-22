package pages

import (
	"bytes"
	"testing"
)

func TestVerifiedHTML(t *testing.T) {
	if len(VerifiedHTML) == 0 {
		t.Fatal("VerifiedHTML is empty")
	}

	for _, want := range [][]byte{
		[]byte("<!DOCTYPE html>"),
		[]byte("You're confirmed!"),
		[]byte("EarlyPass"),
	} {
		if !bytes.Contains(VerifiedHTML, want) {
			t.Errorf("VerifiedHTML does not contain %q", want)
		}
	}
}
