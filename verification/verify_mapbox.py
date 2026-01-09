
from playwright.sync_api import sync_playwright

def verify_mapbox(page):
    page.goto("http://localhost:3000")

    # Wait for the bento grid to load. The map is in one of the motion divs.
    # We can look for the text "Istanbul, TR" which is in the map tile.
    page.get_by_text("Istanbul, TR").wait_for()

    # Take a screenshot of the page
    page.screenshot(path="verification/mapbox_verification.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_mapbox(page)
        except Exception as e:
            print(f"Error: {e}")
            # Take screenshot even if failed if possible
            try:
                page.screenshot(path="verification/error.png")
            except:
                pass
        finally:
            browser.close()
