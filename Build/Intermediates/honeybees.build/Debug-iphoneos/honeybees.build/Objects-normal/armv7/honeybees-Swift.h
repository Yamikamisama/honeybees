// Generated by Apple Swift version 2.0 (swiftlang_PONDEROSA-700.1.100.2 clang-700.1.74)
#pragma clang diagnostic push

#if defined(__has_include) && __has_include(<swift/objc-prologue.h>)
# include <swift/objc-prologue.h>
#endif

#pragma clang diagnostic ignored "-Wauto-import"
#include <objc/NSObject.h>
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>

#if defined(__has_include) && __has_include(<uchar.h>)
# include <uchar.h>
#elif !defined(__cplusplus) || __cplusplus < 201103L
typedef uint_least16_t char16_t;
typedef uint_least32_t char32_t;
#endif

typedef struct _NSZone NSZone;

#if !defined(SWIFT_PASTE)
# define SWIFT_PASTE_HELPER(x, y) x##y
# define SWIFT_PASTE(x, y) SWIFT_PASTE_HELPER(x, y)
#endif
#if !defined(SWIFT_METATYPE)
# define SWIFT_METATYPE(X) Class
#endif

#if defined(__has_attribute) && __has_attribute(objc_runtime_name)
# define SWIFT_RUNTIME_NAME(X) __attribute__((objc_runtime_name(X)))
#else
# define SWIFT_RUNTIME_NAME(X)
#endif
#if defined(__has_attribute) && __has_attribute(swift_name)
# define SWIFT_COMPILE_NAME(X) __attribute__((swift_name(X)))
#else
# define SWIFT_COMPILE_NAME(X)
#endif
#if !defined(SWIFT_CLASS_EXTRA)
# define SWIFT_CLASS_EXTRA
#endif
#if !defined(SWIFT_PROTOCOL_EXTRA)
# define SWIFT_PROTOCOL_EXTRA
#endif
#if !defined(SWIFT_ENUM_EXTRA)
# define SWIFT_ENUM_EXTRA
#endif
#if !defined(SWIFT_CLASS)
# if defined(__has_attribute) && __has_attribute(objc_subclassing_restricted) 
#  define SWIFT_CLASS(SWIFT_NAME) SWIFT_RUNTIME_NAME(SWIFT_NAME) __attribute__((objc_subclassing_restricted)) SWIFT_CLASS_EXTRA
#  define SWIFT_CLASS_NAMED(SWIFT_NAME) __attribute__((objc_subclassing_restricted)) SWIFT_COMPILE_NAME(SWIFT_NAME) SWIFT_CLASS_EXTRA
# else
#  define SWIFT_CLASS(SWIFT_NAME) SWIFT_RUNTIME_NAME(SWIFT_NAME) SWIFT_CLASS_EXTRA
#  define SWIFT_CLASS_NAMED(SWIFT_NAME) SWIFT_COMPILE_NAME(SWIFT_NAME) SWIFT_CLASS_EXTRA
# endif
#endif

#if !defined(SWIFT_PROTOCOL)
# define SWIFT_PROTOCOL(SWIFT_NAME) SWIFT_RUNTIME_NAME(SWIFT_NAME) SWIFT_PROTOCOL_EXTRA
# define SWIFT_PROTOCOL_NAMED(SWIFT_NAME) SWIFT_COMPILE_NAME(SWIFT_NAME) SWIFT_PROTOCOL_EXTRA
#endif

#if !defined(SWIFT_EXTENSION)
# define SWIFT_EXTENSION(M) SWIFT_PASTE(M##_Swift_, __LINE__)
#endif

#if !defined(OBJC_DESIGNATED_INITIALIZER)
# if defined(__has_attribute) && __has_attribute(objc_designated_initializer)
#  define OBJC_DESIGNATED_INITIALIZER __attribute__((objc_designated_initializer))
# else
#  define OBJC_DESIGNATED_INITIALIZER
# endif
#endif
#if !defined(SWIFT_ENUM)
# define SWIFT_ENUM(_type, _name) enum _name : _type _name; enum SWIFT_ENUM_EXTRA _name : _type
#endif
typedef float swift_float2  __attribute__((__ext_vector_type__(2)));
typedef float swift_float3  __attribute__((__ext_vector_type__(3)));
typedef float swift_float4  __attribute__((__ext_vector_type__(4)));
typedef double swift_double2  __attribute__((__ext_vector_type__(2)));
typedef double swift_double3  __attribute__((__ext_vector_type__(3)));
typedef double swift_double4  __attribute__((__ext_vector_type__(4)));
typedef int swift_int2  __attribute__((__ext_vector_type__(2)));
typedef int swift_int3  __attribute__((__ext_vector_type__(3)));
typedef int swift_int4  __attribute__((__ext_vector_type__(4)));
#if defined(__has_feature) && __has_feature(modules)
@import UIKit;
@import CoreLocation;
@import PebbleKit;
@import ObjectiveC;
@import MapKit;
@import Foundation;
#endif

#pragma clang diagnostic ignored "-Wproperty-attribute-mismatch"
#pragma clang diagnostic ignored "-Wduplicate-method-arg"
@class UIBarButtonItem;
@class UITextField;
@class UISegmentedControl;
@class MKMapView;
@class NSBundle;
@class NSCoder;

SWIFT_CLASS("_TtC9honeybees30AddGeotificationViewController")
@interface AddGeotificationViewController : UITableViewController
@property (nonatomic) IBOutlet UIBarButtonItem * __null_unspecified addButton;
@property (nonatomic) IBOutlet UIBarButtonItem * __null_unspecified zoomButton;
@property (nonatomic, weak) IBOutlet UISegmentedControl * __null_unspecified eventTypeSegmentedControl;
@property (nonatomic, weak) IBOutlet UITextField * __null_unspecified radiusTextField;
@property (nonatomic, weak) IBOutlet UITextField * __null_unspecified noteTextField;
@property (nonatomic, weak) IBOutlet MKMapView * __null_unspecified mapView;
- (void)viewDidLoad;
- (IBAction)textFieldEditingChanged:(UITextField * __nonnull)sender;
- (IBAction)onCancel:(id __nonnull)sender;
- (nonnull instancetype)initWithStyle:(UITableViewStyle)style OBJC_DESIGNATED_INITIALIZER;
- (nonnull instancetype)initWithNibName:(NSString * __nullable)nibNameOrNil bundle:(NSBundle * __nullable)nibBundleOrNil OBJC_DESIGNATED_INITIALIZER;
- (nullable instancetype)initWithCoder:(NSCoder * __nonnull)aDecoder OBJC_DESIGNATED_INITIALIZER;
@end

@class UIWindow;
@class CLLocationManager;
@class PBWatch;
@class UIApplication;
@class NSObject;
@class CLRegion;
@class NSURL;
@class NSManagedObjectModel;
@class NSPersistentStoreCoordinator;
@class NSManagedObjectContext;

SWIFT_CLASS("_TtC9honeybees11AppDelegate")
@interface AppDelegate : UIResponder <CLLocationManagerDelegate, UIApplicationDelegate>
@property (nonatomic) UIWindow * __nullable window;
@property (nonatomic, readonly) CLLocationManager * __nonnull locationManager;
@property (nonatomic) PBWatch * __nullable watch;
- (BOOL)application:(UIApplication * __nonnull)application didFinishLaunchingWithOptions:(NSDictionary * __nullable)launchOptions;
- (void)applicationWillResignActive:(UIApplication * __nonnull)application;
- (void)applicationDidEnterBackground:(UIApplication * __nonnull)application;
- (void)applicationWillEnterForeground:(UIApplication * __nonnull)application;
- (void)applicationDidBecomeActive:(UIApplication * __nonnull)application;
- (void)applicationWillTerminate:(UIApplication * __nonnull)application;
- (void)handleRegionEvent:(CLRegion * __nonnull)region;
- (void)locationManager:(CLLocationManager * __nonnull)manager didEnterRegion:(CLRegion * __nonnull)region;
- (void)locationManager:(CLLocationManager * __nonnull)manager didExitRegion:(CLRegion * __nonnull)region;
- (NSString * __nullable)notefromRegionIdentifier:(NSString * __nonnull)identifier;
@property (nonatomic) NSURL * __nonnull applicationDocumentsDirectory;
@property (nonatomic) NSManagedObjectModel * __nonnull managedObjectModel;
@property (nonatomic) NSPersistentStoreCoordinator * __nonnull persistentStoreCoordinator;
@property (nonatomic) NSManagedObjectContext * __nonnull managedObjectContext;
- (void)saveContext;
- (nonnull instancetype)init OBJC_DESIGNATED_INITIALIZER;
@end

@class PBPebbleCentral;

@interface AppDelegate (SWIFT_EXTENSION(honeybees)) <PBPebbleCentralDelegate>
- (void)pebbleCentral:(PBPebbleCentral * __nonnull)central watchDidConnect:(PBWatch * __nonnull)watch isNew:(BOOL)isNew;
@end


SWIFT_CLASS("_TtC9honeybees13Geotification")
@interface Geotification : NSObject <MKAnnotation, NSCoding>
@property (nonatomic) CLLocationCoordinate2D coordinate;
@property (nonatomic) CLLocationDistance radius;
@property (nonatomic, copy) NSString * __nonnull identifier;
@property (nonatomic, copy) NSString * __nonnull note;
@property (nonatomic, readonly, copy) NSString * __nullable title;
@property (nonatomic, readonly, copy) NSString * __nullable subtitle;
- (nullable instancetype)initWithCoder:(NSCoder * __nonnull)decoder OBJC_DESIGNATED_INITIALIZER;
- (void)encodeWithCoder:(NSCoder * __nonnull)coder;
@end

@class UIStoryboardSegue;
@class MKAnnotationView;
@protocol MKOverlay;
@class MKOverlayRenderer;
@class UIControl;
@class CLCircularRegion;
@class NSError;

SWIFT_CLASS("_TtC9honeybees28GeotificationsViewController")
@interface GeotificationsViewController : UIViewController <CLLocationManagerDelegate, MKMapViewDelegate>
@property (nonatomic, weak) IBOutlet MKMapView * __null_unspecified mapView;
@property (nonatomic, copy) NSArray<Geotification *> * __nonnull geotifications;
@property (nonatomic, readonly) CLLocationManager * __nonnull locationManager;
- (void)viewDidLoad;
- (void)prepareForSegue:(UIStoryboardSegue * __nonnull)segue sender:(id __nullable)sender;
- (void)loadAllGeotifications;
- (void)saveAllGeotifications;
- (void)addGeotification:(Geotification * __nonnull)geotification;
- (void)removeGeotification:(Geotification * __nonnull)geotification;
- (void)updateGeotificationsCount;
- (MKAnnotationView * __null_unspecified)mapView:(MKMapView * __nonnull)mapView viewForAnnotation:(id <MKAnnotation> __nonnull)annotation;
- (MKOverlayRenderer * __null_unspecified)mapView:(MKMapView * __nonnull)mapView rendererForOverlay:(id <MKOverlay> __nonnull)overlay;
- (void)mapView:(MKMapView * __nonnull)mapView annotationView:(MKAnnotationView * __nonnull)view calloutAccessoryControlTapped:(UIControl * __nonnull)control;
- (void)addRadiusOverlayForGeotification:(Geotification * __nonnull)geotification;
- (void)removeRadiusOverlayForGeotification:(Geotification * __nonnull)geotification;
- (IBAction)zoomToCurrentLocation:(id __nonnull)sender;
- (void)locationManager:(CLLocationManager * __nonnull)manager didChangeAuthorizationStatus:(CLAuthorizationStatus)status;
- (CLCircularRegion * __nonnull)regionWithGeotification:(Geotification * __nonnull)geotification;
- (void)startMonitoringGeotification:(Geotification * __nonnull)geotification;
- (void)stopMonitoringGeotification:(Geotification * __nonnull)geotification;
- (void)locationManager:(CLLocationManager * __nonnull)manager monitoringDidFailForRegion:(CLRegion * __nullable)region withError:(NSError * __nonnull)error;
- (void)locationManager:(CLLocationManager * __nonnull)manager didFailWithError:(NSError * __nonnull)error;
- (nonnull instancetype)initWithNibName:(NSString * __nullable)nibNameOrNil bundle:(NSBundle * __nullable)nibBundleOrNil OBJC_DESIGNATED_INITIALIZER;
- (nullable instancetype)initWithCoder:(NSCoder * __nonnull)aDecoder OBJC_DESIGNATED_INITIALIZER;
@end

#pragma clang diagnostic pop
